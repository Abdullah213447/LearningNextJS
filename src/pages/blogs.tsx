'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { Container, Typography, Box, TextField, Button, Card, CardContent, CardActions, IconButton, Snackbar, Alert, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Edit, Delete, Save, Cancel } from '@mui/icons-material';
import Link from 'next/link';

interface BlogPost {
  title: string;
  content: string;
}

const BlogPage = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState<string>('');
  const [editContent, setEditContent] = useState<string>('');
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);
  const [deleteSnackbarOpen, setDeleteSnackbarOpen] = useState<boolean>(false);
  const [updateSnackbarOpen, setUpdateSnackbarOpen] = useState<boolean>(false);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newPost: BlogPost = { title, content };
    setPosts([...posts, newPost]);
    setTitle('');
    setContent('');
    setSnackbarOpen(true);
  };

  const handleEditTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };

  const handleEditContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditContent(e.target.value);
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setEditTitle(posts[index].title);
    setEditContent(posts[index].content);
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditTitle('');
    setEditContent('');
  };

  const handleSaveEdit = () => {
    if (editIndex !== null) {
      const updatedPosts = posts.map((post, index) =>
        index === editIndex ? { title: editTitle, content: editContent } : post
      );
      setPosts(updatedPosts);
      setEditIndex(null);
      setEditTitle('');
      setEditContent('');
      setUpdateSnackbarOpen(true);
    }
  };

  const handleDelete = (index: number) => {
    setDeleteIndex(index);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (deleteIndex !== null) {
      const updatedPosts = posts.filter((_, i) => i !== deleteIndex);
      setPosts(updatedPosts);
      setDeleteIndex(null);
      setDeleteDialogOpen(false);
      setDeleteSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleDeleteSnackbarClose = () => {
    setDeleteSnackbarOpen(false);
  };

  const handleUpdateSnackbarClose = () => {
    setUpdateSnackbarOpen(false);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setDeleteIndex(null);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 8, backgroundColor: '#f5f5f5', p: 4, borderRadius: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to the Blog
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4, backgroundColor: '#fff', p: 4, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h6" gutterBottom>
          Add a New Post
        </Typography>
        <TextField
          label="Title"
          fullWidth
          value={title}
          onChange={handleTitleChange}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Content"
          fullWidth
          multiline
          rows={4}
          value={content}
          onChange={handleContentChange}
          required
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Add Blog
        </Button>
      </Box>

      <Box sx={{ mt: 4 }}>
        {posts.map((post, index) => (
          <Card key={index} sx={{ mb: 2, boxShadow: 3 }}>
            <CardContent>
              {editIndex === index ? (
                <Box component="form">
                  <TextField
                    label="Title"
                    fullWidth
                    value={editTitle}
                    onChange={handleEditTitleChange}
                    required
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    label="Content"
                    fullWidth
                    multiline
                    rows={4}
                    value={editContent}
                    onChange={handleEditContentChange}
                    required
                    sx={{ mb: 2 }}
                  />
                </Box>
              ) : (
                <>
                  <Typography variant="h5" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body1">
                    {post.content}
                  </Typography>
                </>
              )}
            </CardContent>
            <CardActions>
              {editIndex === index ? (
                <>
                  <IconButton color="primary" onClick={handleSaveEdit}>
                    <Save />
                  </IconButton>
                  <IconButton color="secondary" onClick={handleCancelEdit}>
                    <Cancel />
                  </IconButton>
                </>
              ) : (
                <>
                  <IconButton color="primary" onClick={() => handleEdit(index)}>
                    <Edit />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => handleDelete(index)}>
                    <Delete />
                  </IconButton>
                </>
              )}
            </CardActions>
          </Card>
        ))}
      </Box>

      <Link href="/">
        <Button variant="text" color="secondary" fullWidth sx={{ mt: 2 }}>
          Logout
        </Button>
      </Link>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Blog post added successfully!
        </Alert>
      </Snackbar>

      <Snackbar
        open={deleteSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleDeleteSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleDeleteSnackbarClose} severity="error" sx={{ width: '100%' }}>
          Blog deleted successfully!
        </Alert>
      </Snackbar>

      <Snackbar
        open={updateSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleUpdateSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleUpdateSnackbarClose} severity="info" sx={{ width: '100%' }}>
          Blog updated successfully!
        </Alert>
      </Snackbar>

      <Dialog
        open={deleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">
          Confirm Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-dialog-description">
            Are you sure you want to delete this blog post?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmDelete} color="secondary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default BlogPage;
