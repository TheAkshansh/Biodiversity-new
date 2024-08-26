var blogForm = document.getElementById('blogForm');
var titleInput = document.getElementById('title');
var textInput = document.getElementById('text-input');
var blogPosts = document.getElementById('blogPosts');


var boldButton = document.getElementById('bold');
var italicButton = document.getElementById('italic');
var underlineButton = document.getElementById('underline');
var strikethroughButton = document.getElementById('strikethrough');
var superscriptButton = document.getElementById('superscript');
var subscriptButton = document.getElementById('subscript');
var insertOrderedListButton = document.getElementById('insertOrderedList');
var insertUnorderedListButton = document.getElementById('insertUnorderedList');
var createLinkButton = document.getElementById('createLink');
var formatBlockSelect = document.getElementById('formatBlock');
var foreColorInput = document.getElementById('foreColor');
var backColorInput = document.getElementById('backColor');
var fileInput = document.getElementById('file');


console.log(fileInput)
fileInput.addEventListener('change', (e) => {
    var file = e.target.files[0];
    console.log(file)
    if (file) {
        var reader = new FileReader();
        reader.onload = (e) => {
            var img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = "100%";
            img.alt = "Uploaded Image";
            textInput.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});


boldButton.addEventListener('click', () => execCommandReplacement()('bold'));
italicButton.addEventListener('click', () => execCommandReplacement()('italic'));
underlineButton.addEventListener('click', () => execCommandReplacement('underline'));
strikethroughButton.addEventListener('click', () => execCommandReplacement('strikethrough'));
superscriptButton.addEventListener('click', () => execCommandReplacement('superscript'));
subscriptButton.addEventListener('click', () => execCommandReplacement('subscript'));
insertOrderedListButton.addEventListener('click', () => execCommandReplacement('insertOrderedList'));
insertUnorderedListButton.addEventListener('click', () => execCommandReplacement('insertUnorderedList'));
createLinkButton.addEventListener('click', () => {
    var url = prompt("Enter the URL:");
    if (url) {
        execCommandReplacement('createLink', false, url);
    }
});
console.log(formatBlockSelect)
// formatBlockSelect.addEventListener('change', () => {
//     document.execCommand('formatBlock', false, formatBlockSelect.value);
// });
// fontNameSelect.addEventListener('change', () => {
//     document.execCommand('fontName', false, fontNameSelect.value);
// });

document.getElementById('foreColor').addEventListener('input', function() {
    applyStyleToSelection('color', this.value);
});

document.getElementById('backColor').addEventListener('input', function() {
    applyStyleToSelection('background-color', this.value);
});

function applyStyleToSelection(styleName, value) {
    let selectedText = window.getSelection();
    if (selectedText.rangeCount) {
        let range = selectedText.getRangeAt(0);
        let span = document.createElement('span');
        span.style[styleName] = value;
        range.surroundContents(span);
    }
}
// var input = document.getElementById('input');
//         input.addEventListener('change', function(e) {
//             console.log(e.target.files);
//         });


// Handle form submission
blogForm.addEventListener('submit', (e) => {
    e.preventDefault();

    var title = titleInput.value.trim();
    var content = textInput.innerHTML.trim();

    if (title && content) {
        const blogPosts = document.createElement('div');
        blogPosts.classList.add('blogPosts');
        
        const blogTitle = document.createElement('h3');
        blogTitle.textContent = title;

        const blogContent = document.createElement('div');
        blogContent.innerHTML = content;

        blogPosts.appendChild(blogTitle);
        blogPosts.appendChild(blogContent);

        blogPosts.appendChild(blogPosts);

        // Clear inputs
        titleInput.value = '';
        textInput.innerHTML = '';
    } else {
        alert('Please enter a title and content for your blog post.');
    }
});

var fontSizes = [1, 2, 3, 4, 5, 6, 7];
fontSizes.forEach(size => {
    var option = document.createElement('option');
    option.value = size;
    option.textContent = `Size ${size}`;
    fontSizeSelect.appendChild(option);
});
