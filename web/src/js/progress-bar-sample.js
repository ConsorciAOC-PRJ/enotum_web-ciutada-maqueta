const progressBar = () => {

    let line = new ProgressBar.Line('#progress-bar-container', {
        color: '#005CD1',
        trailColor: '#E0EEFF',
        strokeWidth: 1,
        trailWidth: 1,
    });
    line.animate(1, {
        duration: 800
    });
}

document.ready = progressBar();