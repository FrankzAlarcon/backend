const Twit = require('twit');
// import Twit from 'twit';

let twitter  = new Twit({
  consumer_key: 'eukrhMeOtHiGlpxzkzMaOUz9b',
  consumer_secret: 'W18F3RDZAb4VLGa7JXIhIFNQfz3HN4LR9IgD80jLniYxj6BYqO',
  access_token: '4865683485-OxjXay7efuS8rtImSZLSv4ocZqRUnCN4QEYq8bl',
  access_token_secret: '4RCc6jzLE9KksMJRS7eHwtdZY6lfwq0doGYlC2VMlqnXk'
});

/**Parametros: 1,2,3,4 */
async function getData(codigo) {
  const data = await twitter.get(`https://api.twitter.com/2/users/${codigo}/following?user.fields=public_metrics&max_results=10`)
  .then(response => {
    return response.data
  })
  .catch(error => console.log(error))

  return data || 'error';
}
module.exports = {
  getData
};
