document.getElementById('blogForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent form from submitting

// Get the blog title and content from the form inputs
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

// Create a new blog post element
    const blogPost = document.createElement('div');
    blogPost.classList.add('blog-post');

// Add the title to the blog post
    const blogTitle = document.createElement('h3');
    blogTitle.textContent = title;
    blogPost.appendChild(blogTitle);

// Add the content to the blog post
    const blogContent = document.createElement('p');
    blogContent.textContent = content;
    blogPost.appendChild(blogContent);

// Append the new blog post to the blogPosts div
    document.getElementById('blogPosts').appendChild(blogPost);

// Clear the form inputs after submission
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
});
