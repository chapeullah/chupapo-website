import { useEffect, useRef } from 'react';
import './product-marquee.css';
import { useLanguage } from "@i18n/use-language.js";

export default function ProductMarquee() {
  const { t } = useLanguage();
  const marqueeTexts = t.homepage.product.marquee;

  const marqueeRef = useRef(null);
    const trackRef = useRef(null);
    const groupRef = useRef(null);

    useEffect(() => {
      const marquee = marqueeRef.current;
      const track = trackRef.current;
      const group = groupRef.current;

      if (!marquee || !track || !group) {
        return;
      }

      let animationFrameId = null;
      let previousTime = performance.now();

      let offset = 0;
      let groupWidth = group.offsetWidth;

      const defaultSpeed = 45;
      let currentSpeed = defaultSpeed;
      let targetSpeed = defaultSpeed;

      let wheelVelocity = 0;

      let isHover = false;
      let isDragging = false;

      let dragStartX = 0;
      let dragStartOffset = 0;

      const normalizeOffset = () => {
        if (groupWidth <= 0) {
          return;
        }

        offset %= groupWidth;

        if (offset < 0) {
          offset += groupWidth;
        }
      };

      const updateTransform = () => {
        track.style.transform = `translateX(${-offset}px)`;
      };

      const animate = (currentTime) => {
        const deltaTime = (currentTime - previousTime) / 1000;
        previousTime = currentTime;

        groupWidth = group.offsetWidth;

        if (!isDragging) {
          currentSpeed += (targetSpeed - currentSpeed) * 0.01;

          offset += currentSpeed * deltaTime;
          offset += wheelVelocity * deltaTime;

          wheelVelocity *= Math.exp(-8 * deltaTime);

          if (Math.abs(wheelVelocity) < 1) {
            wheelVelocity = 0;
          }

          normalizeOffset();
          updateTransform();
        }

        animationFrameId = requestAnimationFrame(animate);
      };

      const handleMouseEnter = () => {
        isHover = true;

        if (!isDragging) {
          targetSpeed = 0;
        }
      };

      const handleMouseLeave = () => {
        isHover = false;

        if (!isDragging) {
          targetSpeed = defaultSpeed;
        }
      };

      const handleWheel = (event) => {
        if (!isHover || isDragging) {
          return;
        }

        event.preventDefault();

        const wheelDelta =
          Math.abs(event.deltaX) > Math.abs(event.deltaY)
            ? event.deltaX
            : event.deltaY;

        wheelVelocity += wheelDelta * 18;
      };

      const handlePointerDown = (event) => {
        if (event.pointerType === 'mouse' && event.button !== 0) {
          return;
        }

        isDragging = true;

        targetSpeed = 0;
        currentSpeed = 0;
        wheelVelocity = 0;

        dragStartX = event.clientX;
        dragStartOffset = offset;

        marquee.classList.add('is-dragging');
        marquee.setPointerCapture(event.pointerId);

        event.preventDefault();
      };

      const handlePointerMove = (event) => {
        if (!isDragging) {
          return;
        }

        const deltaX = event.clientX - dragStartX;

        offset = dragStartOffset - deltaX;
        normalizeOffset();

        updateTransform();
      };

      const handlePointerUp = (event) => {
        if (!isDragging) {
          return;
        }

        isDragging = false;

        marquee.classList.remove('is-dragging');

        if (marquee.hasPointerCapture(event.pointerId)) {
          marquee.releasePointerCapture(event.pointerId);
        }

        targetSpeed = isHover ? 0 : defaultSpeed;
      };

      marquee.addEventListener('mouseenter', handleMouseEnter);
      marquee.addEventListener('mouseleave', handleMouseLeave);
      marquee.addEventListener('wheel', handleWheel, { passive: false });

      marquee.addEventListener('pointerdown', handlePointerDown);
      marquee.addEventListener('pointermove', handlePointerMove);
      marquee.addEventListener('pointerup', handlePointerUp);
      marquee.addEventListener('pointercancel', handlePointerUp);

      animationFrameId = requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(animationFrameId);

        marquee.removeEventListener('mouseenter', handleMouseEnter);
        marquee.removeEventListener('mouseleave', handleMouseLeave);
        marquee.removeEventListener('wheel', handleWheel);

        marquee.removeEventListener('pointerdown', handlePointerDown);
        marquee.removeEventListener('pointermove', handlePointerMove);
        marquee.removeEventListener('pointerup', handlePointerUp);
        marquee.removeEventListener('pointercancel', handlePointerUp);
      };
    }, []);

  return (
    <div className="product-marquee-wrapper">
      <div ref={marqueeRef} className="product-marquee">
        <div ref={trackRef} className="product-marquee-track">
          {[0, 1, 2, 3].map((groupIndex) => (
            <div
              key={groupIndex}
              ref={groupIndex === 0 ? groupRef : null}
              className="product-marquee-group"
            >
              {marqueeTexts.map((item, index) => (
                <span key={`${groupIndex}-${index}`} className="product-item">
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}