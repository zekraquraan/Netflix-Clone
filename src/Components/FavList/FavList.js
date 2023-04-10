import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

function FavList() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // retrieve data from database
    axios.get('/api/favorites')
      .then(response => {
        setFavorites(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    // remove item from favorites list
    const newFavorites = favorites.filter(favorite => favorite.id !== id);
    setFavorites(newFavorites);

    // send DELETE request to database
    axios.delete(`/api/favorites/${id}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleUpdate = (id, comment) => {
    // update comment for item in favorites list
    const updatedFavorites = favorites.map(favorite => {
      if (favorite.id === id) {
        return { ...favorite, comment };
      } else {
        return favorite;
      }
    });
    setFavorites(updatedFavorites);

    // send PUT request to database
    axios.put(`/api/favorites/${id}`, { comment })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      {favorites.map(favorite => (
        <Card key={favorite.id}>
          <Card.Body>
            <Card.Title>{favorite.title}</Card.Title>
            <Card.Text>{favorite.description}</Card.Text>
            <Card.Text>Comment: {favorite.comment}</Card.Text>
            <Button variant="danger" onClick={() => handleDelete(favorite.id)}>Delete</Button>
            <Button variant="primary" onClick={() => handleUpdate(favorite.id, prompt("Enter a new comment"))}>Update</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default FavList;
