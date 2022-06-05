import { requestAPI } from 'utils/fetch';

const test1 = async () => {
  const res = await requestAPI().get('pokemon-species/aegislash');
  console.log(res);
}


const testList = {
  test1
}

export default testList;