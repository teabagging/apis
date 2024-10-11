## Guide

Below you'll find examples using [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) but you can JSONPlaceholder with any other language.

You can copy paste the code in your browser console to quickly test JSONPlaceholder.

### Getting a resource

```js
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
```

👇 *Output*

```js
{
  id: 1,
  title: '...',
  body: '...',
  userId: 1
}
```

### Listing all resources

```js
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));
```

👇 *Output*

```js
[
  { id: 1, title: '...' /* ... */ },
  { id: 2, title: '...' /* ... */ },
  { id: 3, title: '...' /* ... */ },
  /* ... */
  { id: 100, title: '...' /* ... */ },
];
```

### Creating a resource

```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```

👇 *Output*

```js
{
  id: 101,
  title: 'foo',
  body: 'bar',
  userId: 1
}
```

 **Important** : resource will not be really updated on the server but it will be faked as if.

### Updating a resource

```js
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```

👇 *Output*

```js
{
  id: 1,
  title: 'foo',
  body: 'bar',
  userId: 1
}
```

 **Important** : resource will not be really updated on the server but it will be faked as if.

### Patching a resource

```js
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```

👇 *Output*

```js
{
  id: 1,
  title: 'foo',
  body: '...',
  userId: 1
}
```

 **Important** : resource will not be really updated on the server but it will be faked as if.

### Deleting a resource

```js
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
```

 **Important** : resource will not be really updated on the server but it will be faked as if.

### Filtering resources

Basic filtering is supported through query parameters.

```js
// This will return all the posts that belong to the first user
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then((response) => response.json())
  .then((json) => console.log(json));
```

### Listing nested resources

One level of nested route is available.

```js
// This is equivalent to /comments?postId=1
fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then((response) => response.json())
  .then((json) => console.log(json));
```
