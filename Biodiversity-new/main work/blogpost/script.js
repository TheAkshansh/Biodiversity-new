// document.getElementById('blogForm').addEventListener('submit', function(e) {
//     e.preventDefault();  // Prevent form from submitting

// // Get the blog title and content from the form inputs
//     const title = document.getElementById('title').value;
//     const content = document.getElementById('content').value;

// // Create a new blog post element
//     const blogPost = document.createElement('div');
//     blogPost.classList.add('blog-post');

// // Add the title to the blog post
//     const blogTitle = document.createElement('h3');
//     blogTitle.textContent = title;
//     blogPost.appendChild(blogTitle);

// // Add the content to the blog post
//     const blogContent = document.createElement('p');
//     blogContent.textContent = content;
//     blogPost.appendChild(blogContent);

// // Append the new blog post to the blogPosts div
//     document.getElementById('blogPosts').appendChild(blogPost);

// // Clear the form inputs after submission
//     document.getElementById('title').value = '';
//     document.getElementById('content').value = '';
// });

document.getElementById('blogForm').addEventListener('submit', function(e) {
  // Append the new blog post to the blogPosts div
  document.getElementById('blogPosts').appendChild(blogPosts);

  // Clear the form inputs after submission
      document.getElementById('title').value = '';
      document.getElementById('content').value = '';
});

// Get references to elements
const blogForm = document.getElementById('blogForm');
const titleInput = document.getElementById('title');
const textInput = document.getElementById('text-input');
const blogPosts = document.getElementById('blogPosts');

// Formatting buttons
const boldButton = document.getElementById('bold');
const italicButton = document.getElementById('italic');
const underlineButton = document.getElementById('underline');
const strikethroughButton = document.getElementById('strikethrough');
const superscriptButton = document.getElementById('superscript');
const subscriptButton = document.getElementById('subscript');
const insertOrderedListButton = document.getElementById('insertOrderedList');
const insertUnorderedListButton = document.getElementById('insertUnorderedList');
const createLinkButton = document.getElementById('createLink');
const formatBlockSelect = document.getElementById('formatBlock');
const fontNameSelect = document.getElementById('fontName');
const fontSizeSelect = document.getElementById('fontSize');
const foreColorInput = document.getElementById('foreColor');
const backColorInput = document.getElementById('backColor');
const fileInput = document.getElementById('file');

// Add event listeners for formatting buttons
boldButton.addEventListener('click', () => document.execCommand('bold'));
italicButton.addEventListener('click', () => document.execCommand('italic'));
underlineButton.addEventListener('click', () => document.execCommand('underline'));
strikethroughButton.addEventListener('click', () => document.execCommand('strikethrough'));
superscriptButton.addEventListener('click', () => document.execCommand('superscript'));
subscriptButton.addEventListener('click', () => document.execCommand('subscript'));
insertOrderedListButton.addEventListener('click', () => document.execCommand('insertOrderedList'));
insertUnorderedListButton.addEventListener('click', () => document.execCommand('insertUnorderedList'));

createLinkButton.addEventListener('click', () => {
    const url = prompt("Enter the URL:");
    if (url) {
        document.execCommand('createLink', false, url);
    }
});

formatBlockSelect.addEventListener('change', () => {
    document.execCommand('formatBlock', false, formatBlockSelect.value);
});

fontNameSelect.addEventListener('change', () => {
    document.execCommand('fontName', false, fontNameSelect.value);
});

fontSizeSelect.addEventListener('change', () => {
    document.execCommand('fontSize', false, fontSizeSelect.value);
});

foreColorInput.addEventListener('input', () => {
    document.execCommand('foreColor', false, foreColorInput.value);
});

backColorInput.addEventListener('input', () => {
    document.execCommand('backcolor', false, backColorInput.value);
});

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = "100%";
            textInput.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});

// Handle form submission
blogForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const content = textInput.innerHTML.trim();

    if (title && content) {
        const blogPost = document.createElement('div');
        blogPost.classList.add('blog-post');
        
        const blogTitle = document.createElement('h3');
        blogTitle.textContent = title;

        const blogContent = document.createElement('div');
        blogContent.innerHTML = content;

        blogPost.appendChild(blogTitle);
        blogPost.appendChild(blogContent);

        blogPosts.appendChild(blogPost);

        // Clear inputs
        titleInput.value = '';
        textInput.innerHTML = '';
    } else {
        alert('Please enter a title and content for your blog post.');
    }
});

// Populate fontName and fontSize select options
const fonts = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana'];
fonts.forEach(font => {
    const option = document.createElement('option');
    option.value = font;
    option.textContent = font;
    fontNameSelect.appendChild(option);
});

const fontSizes = [1, 2, 3, 4, 5, 6, 7];
fontSizes.forEach(size => {
    const option = document.createElement('option');
    option.value = size;
    option.textContent = `Size ${size}`;
    fontSizeSelect.appendChild(option);
});
