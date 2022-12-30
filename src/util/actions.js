export function preventEnterKey(node) {

    function preventFunction(event) {
        if (event.key === 'Enter') {
            document.execCommand('insertLineBreak')
            event.preventDefault()
        }
    }
    node.addEventListener('keydown', preventFunction)

    return {
        destroy() {
            node.removeEventListener('keydown', preventFunction)

        }
    }
}