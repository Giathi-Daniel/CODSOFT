document.getElementById('downloadButton').addEventListener('click', function() {
    // Set the source of the <embed> element to display the PDF
    let pdfEmbed = document.getElementById('pdfEmbed');
    pdfEmbed.src = 'My Resume.pdf';
    pdfEmbed.style.display = 'block';

    // Download the PDF file
    let url = 'My Resume.pdf';
    let filename = 'My Resume.pdf'; 

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';

    xhr.onload = function() {
        let blob = new Blob([xhr.response], {type: 'application/octet-stream'});
        let link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = filename;

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    };

    xhr.send();
});
