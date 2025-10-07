document.querySelector("button").addEventListener("click", function() {
    const box = document.querySelector(".box");

    html2canvas(box, {
        scale: 1,
        width: 744,
        height: 744,
        backgroundColor: null
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'present-card.png';
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
});
