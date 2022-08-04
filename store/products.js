export const state = () => ({
  items: [
    {
      id: 1,
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, facilis magni non nulla quaerat vel.',
      img: 'https://skr.sh/i/020822/29V95kcH.jpg?download=1&name=Скриншот%2002-08-2022%2017:30:38.jpg',
      price: '1234',
    },
    {
      id: 2,
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, facilis magni non nulla quaerat vel.',
      img: 'https://tym.pgp-group.ru/wp-content/uploads/2019/10/55.jpg',
      price: '1234',
    },
  ]
})

export const mutations = {
  addProduct(state, product) {
    state.items.push(product);
  },
  removeProduct(state, index) {
    state.items = delete state.items[index];
  }
}
