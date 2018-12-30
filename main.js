let shown = false;
const show = () => {
    if (shown === false) {
    document.getElementById('hide').id = 'show';
    shown = true;
    } else if (shown === true) {
        document.getElementById('shown').id = 'hide';
        shown = false;
    }
};
