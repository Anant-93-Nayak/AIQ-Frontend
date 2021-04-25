export function getList() {
    return fetch('http://localhost:3333/surveys')
      .then(data => data.json())
  }
  