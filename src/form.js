export const formData = (form) => {
    const inputs = form.querySelectorAll('input');
    let values = {};
    inputs.forEach(input => {
        values[input.id] = input.value;
    });
    return values;
}; // formData
//# sourceMappingURL=form.js.map