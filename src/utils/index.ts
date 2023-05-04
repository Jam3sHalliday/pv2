function removeElement(element: any) {

    if (typeof (element) === "string") {
        element = document.querySelector(element);
    }
    return function () {
        element.parentNode.removeChild(element);
    };
}

export { removeElement };