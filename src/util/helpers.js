// Dispatch event on click outside of node 
// Dispatch event on click outside of node 
export function clickOutside(node, exceptionElement) {
    console.log(exceptionElement)
    const handleClick = event => {
        if (node && !node.contains(event.target) && !exceptionElement.contains(event.target) && !event.defaultPrevented) {
            console.log(event.target.id)
            node.dispatchEvent(
                new CustomEvent('click_outside', node)
            )
        }
    }

    document.addEventListener('click', handleClick, true);

    return {
        destroy() {
            document.removeEventListener('click', handleClick, true);
        }
    }
}


export function clickOutsideOld(node, exceptions) {
    const handleClick = event => {
        if (node && !node.contains(event.target) && !exceptions.exceptionIds.includes(event.target.id) && !event.defaultPrevented) {
            console.log(event.target.id)
            node.dispatchEvent(
                new CustomEvent('click_outside', node)
            )
        }
    }

    document.addEventListener('click', handleClick, true);

    return {
        destroy() {
            document.removeEventListener('click', handleClick, true);
        }
    }
}


//GENERATE RANDOM ID - FOR API TESTING ONLY
export function randomID() {
    return new Date().valueOf()
}