// Simple HTML include loader
document.addEventListener('DOMContentLoaded', function() {
    // Find all elements with data-include attribute
    const includeElements = document.querySelectorAll('[data-include]');
    
    includeElements.forEach(element => {
        const file = element.getAttribute('data-include');
        
        fetch(file)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                element.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading include file:', file, error);
                element.innerHTML = `<p>Error loading content from ${file}</p>`;
            });
    });

    // Create modal HTML
    const modalHTML = `
        <div id="imageModal" class="modal">
            <span class="modal-close" onclick="closeModal()">&times;</span>
            <div class="modal-content">
                <img id="modalImage" src="" alt="">
                <video id="modalVideo" controls loop></video>
                <div id="modalCaption" class="modal-caption"></div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
});

// Gallery modal function
function openModal(element) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalVideo = document.getElementById('modalVideo');
    const caption = document.getElementById('modalCaption');
    
    const img = element.querySelector('img');
    const captionText = element.querySelector('.collage-cap').textContent;
    const description = element.getAttribute('data-description');
    
    modalImg.src = img.src;
    modalImg.style.display = 'block';
    modalVideo.style.display = 'none';
    
    // Show title and description
    if (description) {
        caption.innerHTML = `<strong style="font-size: 1.3rem; display: block; margin-bottom: 10px;">${captionText}</strong>${description}`;
    } else {
        caption.textContent = captionText;
    }
    
    modal.classList.add('active');
}

// Publication modal function
function openPubModal(element) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalVideo = document.getElementById('modalVideo');
    const caption = document.getElementById('modalCaption');
    
    const videoSrc = element.getAttribute('data-video');
    const imageSrc = element.getAttribute('data-image');
    const captionText = element.getAttribute('data-caption');
    
    if (videoSrc) {
        // Show video
        modalVideo.src = videoSrc;
        modalVideo.style.display = 'block';
        modalImg.style.display = 'none';
        modalVideo.play();
    } else if (imageSrc) {
        // Show image (GIF)
        modalImg.src = imageSrc;
        modalImg.style.display = 'block';
        modalVideo.style.display = 'none';
    }
    
    caption.textContent = captionText;
    modal.classList.add('active');
}

// Close modal function
function closeModal() {
    const modal = document.getElementById('imageModal');
    const modalVideo = document.getElementById('modalVideo');
    
    modal.classList.remove('active');
    modalVideo.pause();
    modalVideo.currentTime = 0;
    modalVideo.src = '';
}

// Close on click outside
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

