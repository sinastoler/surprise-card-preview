import { W as WebGLRenderer, S as Scene, O as OrthographicCamera, P as PlaneGeometry, C as Color, a as CanvasTexture, b as SRGBColorSpace, c as ShaderMaterial, V as Vector2, F as FrontSide, M as Mesh } from './vendor-three-DLEEHw1X.js';

function createCardRenderer(host, art, palette, variant, failed) {
  const resources = [];
  let renderer;
  let observer;
  let lost;
  let disposed = false;
  const dispose = () => {
    if (disposed) return;
    disposed = true;
    observer?.disconnect();
    if (lost && renderer) renderer.domElement.removeEventListener("webglcontextlost", lost);
    resources.forEach((resource) => resource.dispose());
    renderer?.dispose();
    renderer?.forceContextLoss();
    renderer?.domElement.remove();
  };
  try {
    renderer = new WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0, 0);
    const scene = new Scene();
    const camera = new OrthographicCamera(-1.5, 1.5, 1.8, -1.8, 0.1, 20);
    camera.position.z = 8;
    const geometry = new PlaneGeometry(3.18, 3.816);
    resources.push(geometry);
    const isRare = variant.rarity !== "common";
    const foilTint = isRare ? new Color("#c9a24a") : new Color(palette.accent);
    const foilGain = variant.rarity === "legendary" ? 1.55 : isRare ? 1.25 : 1;
    const layers = art.map((layer) => {
      const canvas = document.createElement("canvas");
      canvas.width = 600;
      canvas.height = 720;
      const c = canvas.getContext("2d");
      if (!c) throw new Error("No drawing context");
      for (const mark of layer.marks) {
        const shape = new Path2D(mark.d);
        c.globalAlpha = mark.opacity ?? 1;
        if (mark.fill !== "none") {
          c.fillStyle = mark.fill;
          c.fill(shape);
        }
        if (mark.stroke) {
          c.strokeStyle = mark.stroke;
          c.lineWidth = mark.width ?? 2;
          c.lineCap = "round";
          c.lineJoin = "round";
          c.stroke(shape);
        }
      }
      const texture = new CanvasTexture(canvas);
      texture.colorSpace = SRGBColorSpace;
      const material = new ShaderMaterial({
        side: FrontSide,
        uniforms: {
          picture: { value: texture },
          tilt: { value: new Vector2() },
          phase: { value: variant.foilPhase },
          light: { value: variant.lightAngle },
          accent: { value: foilTint },
          gain: { value: foilGain }
        },
        transparent: true,
        depthWrite: false,
        vertexShader: "varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
        fragmentShader: `uniform sampler2D picture; uniform vec2 tilt; uniform float phase, light, gain; uniform vec3 accent; varying vec2 vUv;
          void main(){vec4 p=texture2D(picture,vUv); float angle=length(tilt);
          float band=pow(.5+.5*sin((vUv.x*1.3+vUv.y+phase+tilt.x*2.)*12.),12.);
          float shine=pow(max(0.,1.-abs(vUv.x+vUv.y*.4-.65-dot(tilt,vec2(cos(light),sin(light))))),18.);
          p.rgb+=accent*(band*.07+shine*.08)*gain*smoothstep(.02,.38,angle); gl_FragColor=p;
          #include <colorspace_fragment>
        }`
      });
      const mesh = new Mesh(geometry, material);
      mesh.position.z = layer.depth * 0.08;
      mesh.renderOrder = Math.round(layer.depth * 10);
      scene.add(mesh);
      resources.push(texture, material);
      return { mesh, depth: layer.depth, material };
    });
    lost = (e) => {
      e.preventDefault();
      failed();
      dispose();
    };
    renderer.domElement.addEventListener("webglcontextlost", lost);
    renderer.domElement.setAttribute("aria-hidden", "true");
    host.appendChild(renderer.domElement);
    const resize = () => renderer?.setSize(Math.max(1, host.clientWidth), Math.max(1, host.clientHeight), false);
    observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();
    return {
      update(x, y) {
        if (disposed) return;
        layers.forEach(({ mesh, depth, material }) => {
          mesh.position.x = y * depth * 0.17;
          mesh.position.y = x * depth * 0.17;
          material.uniforms.tilt.value.set(y, x);
        });
        renderer.render(scene, camera);
      },
      dispose
    };
  } catch (error) {
    dispose();
    throw error;
  }
}

export { createCardRenderer };
