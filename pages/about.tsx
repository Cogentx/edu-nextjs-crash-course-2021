import type {NextPage} from 'next';
import Meta from '../components/Meta';

const About : NextPage = () => {
  return (
    <div>
      {/* override title in metadata */}
      <Meta title="About"/>
      <h1>About Page</h1>
    </div>
  )
}

export default About;
