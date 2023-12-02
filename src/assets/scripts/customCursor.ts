export function handleMouseOver(hoveredElementSelector: string) {
  const arrowCursors = document.querySelectorAll<HTMLElement>(".arrow-cursor");

  arrowCursors.forEach((arrowCursor) => {
    document
      .querySelectorAll<HTMLElement>(hoveredElementSelector)
      .forEach((element) => {
        element.addEventListener("mousemove", (e) => {
          handleElementMouseMove(e, arrowCursor, element); // Updated to pass the element
        });
        element.addEventListener("mouseout", () => {
          handleElementMouseOut(arrowCursor, element); // Updated to pass the element
        });
      });
  });
}

function handleElementMouseMove(
  e: MouseEvent,
  arrowCursor: HTMLElement,
  hoveredElement: HTMLElement
) {
  arrowCursor.classList.remove("scale-0");
  updateCursorPosition(e, arrowCursor);
  addCursorNoneClass(hoveredElement); // Add the class to the hovered element and its children
}

function handleElementMouseOut(
  arrowCursor: HTMLElement,
  hoveredElement: HTMLElement
) {
  arrowCursor.classList.add("scale-0");
  removeCursorNoneClass(hoveredElement); // Remove the class from the hovered element and its children
}

function updateCursorPosition(e: MouseEvent, cursorElement: HTMLElement) {
  cursorElement.style.left = `${e.clientX}px`;
  cursorElement.style.top = `${e.clientY}px`;
}

function addCursorNoneClass(element: HTMLElement) {
  element.classList.add("lg:cursor-none");
  element.querySelectorAll("*").forEach((child) => {
    (child as HTMLElement).classList.add("lg:cursor-none");
  });
}

function removeCursorNoneClass(element: HTMLElement) {
  element.classList.remove("lg:cursor-none");
  element.querySelectorAll("*").forEach((child) => {
    (child as HTMLElement).classList.remove("lg:cursor-none");
  });
}
