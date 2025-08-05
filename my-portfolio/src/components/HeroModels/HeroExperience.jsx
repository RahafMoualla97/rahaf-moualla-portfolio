import { OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import React, { useLayoutEffect, useState } from 'react'; // أضف useLayoutEffect و useState
import { useMediaQuery } from 'react-responsive';
import { TextureLoader } from 'three';

import HeroLights from './HeroLights';
import Particles from './Particles';

const ImageAsPlane = ({ imageUrl }) => {
  const texture = useLoader(TextureLoader, imageUrl);
  // حالة لتخزين الأبعاد المحسوبة للوحة ثلاثية الأبعاد
  const [planeDimensions, setPlaneDimensions] = useState([1, 1]); // قيم افتراضية

  useLayoutEffect(() => {
    // تأكد من تحميل الملمس قبل محاولة الوصول إلى أبعاده
    if (texture.image) {
      const { width, height } = texture.image;
      const aspectRatio = width / height;

      // هنا نحدد ارتفاعًا ثابتًا (مثلاً 7 وحدات) ثم نحسب العرض بناءً على النسبة
      // يمكنك تعديل '7' لزيادة أو تقليل حجم الصورة الكلي في المشهد
      const fixedHeight = 7;
      const calculatedWidth = fixedHeight * aspectRatio;

      setPlaneDimensions([calculatedWidth, fixedHeight]);
    }
  }, [texture]); // أعد تشغيل التأثير عندما يتغير الملمس

  return (
    <mesh position={[0, 0, 0]}>
      {/* استخدم الأبعاد المحسوبة هنا */}
      <planeGeometry args={planeDimensions} />
      <meshBasicMaterial map={texture} transparent={true} />
    </mesh>
  );
};

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <HeroLights />
      <Particles count={100} />
      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
        // rotation={[0, -Math.PI / 4, 0]}
      >
        <ImageAsPlane imageUrl="/images/rahaf-moualla.jpg" />
      </group>
    </Canvas>
  );
};

export default HeroExperience;








// import { OrbitControls } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
// import React from 'react'
// import { useMediaQuery } from 'react-responsive';
// import { Room } from './Room';
// import HeroLights from './HeroLights';
// import Particles from './Particles';

// const HeroExperience = () => {
//   const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});
//   const isMobile = useMediaQuery({ query: '(max-width: 768px)'});
//   return (
//     <Canvas camera={{ position: [0, 0, 15], fov: 45}}>
        
//         <OrbitControls
//         enablePan={false}
//         enableZoom={!isTablet}
//         maxDistance={20}
//         minDistance={5}
//         minPolarAngle={Math.PI / 5}
//         maxPolarAngle={Math.PI / 2}
//         />
//         <HeroLights/>
//         <Particles count={100}/>
//         <group
//         scale={isMobile? 0.7 : 1}
//         position={[0, -3.5, 0]}
//         rotation={[0, -Math.PI /4, 0]}
//         >
//           <Room/>
//         </group>
       

//     </Canvas>
//   )
// }

// export default HeroExperience