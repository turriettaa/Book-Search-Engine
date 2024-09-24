import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

export const SEARCH_BOOKS = gql`
  query searchBooks($searchTerm: String!) {
    searchBooks(searchTerm: $searchTerm) {
      bookId
      authors
      description
      title
      image
      link
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: BookInput!) {
    saveBook(input: $input) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const GET_USER = gql`
  query getUser($username: String!) {
    getUser(username: $username) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`

export const GET_BOOK = gql`
  query getBook($bookId: ID!) {
    getBook(bookId: $bookId) {
      bookId
      authors
      description
      title
      image
      link
    }
  }
`
export const GET_BOOKS = gql`
  query getBooks {
    getBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
`
export const GET_BOOKS_BY_AUTHOR = gql`
  query getBooksByAuthor($author: String!) {
    getBooksByAuthor(author: $author) {
      bookId
      authors
      description
      title
      image
      link
    }
  }
`
export const GET_BOOKS_BY_TITLE = gql`
  query getBooksByTitle($title: String!) {
    getBooksByTitle(title: $title) {
      bookId
      authors
      description
      title
      image
      link
    }
  }
`
export const GET_BOOKS_BY_GENRE = gql`
  query getBooksByGenre($genre: String!) {
    getBooksByGenre(genre: $genre) {
      bookId
      authors
      description
      title
      image
      link
    }
  }
`
export const GET_BOOKS_BY_YEAR = gql`
  query getBooksByYear($year: String!) 
  {
    getBooksByYear(year: $year) {
      bookId
      authors
      description
      title
      image
      link
    }
  }
`
export const GET_BOOKS_BY_RATING = gql`
  query getBooksByRating($rating: String!) {
    getBooksByRating(rating: $rating) {
      bookId
      authors
      description
      title
      image
      link
    }
  }
`
