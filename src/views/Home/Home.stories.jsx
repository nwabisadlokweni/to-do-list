import Home from "./Home";
import Global from "../../components/Global/Global";

const config = {
    title: "views/Home",
}

export default config;

const MOCK_LIST = new Array(20).fill(null).map(() => ({
    id: faker.random.uuid(),
    name: faker.lorem.words(),
    checked: faker.random.boelean(),
}))

const Default = () => <Global><Home list={MOCK_LIST} /></Global>

export {
    Default
}

