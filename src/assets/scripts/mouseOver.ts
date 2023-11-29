export function handleMouseOver(hoveredElement: string) {
  const customCursors =
    document.querySelectorAll<HTMLElement>(".custom-cursor");

  if (customCursors.length > 0) {
    customCursors.forEach((customCursor) => {
      document.querySelectorAll(hoveredElement).forEach((hoveredElement) => {
        if (hoveredElement instanceof HTMLElement) {
          hoveredElement.addEventListener("mousemove", (e) => {
            customCursor.classList.remove("scale-0");
            customCursor.style.left = `${e.clientX}px`;
            customCursor.style.top = `${e.clientY}px`;
          });

          hoveredElement.addEventListener("mouseout", () => {
            customCursor.classList.add("scale-0");
          });
        }
      });

      document.addEventListener("mousemove", (e) => {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
      });
    });
  }
}
