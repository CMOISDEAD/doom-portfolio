import { Layout } from '../components/Layout'
import { Card } from '../components/Card';

export const Project = () => {
  return (
    <Layout>
      <div>
        <div className="text-6xl text-white font-bold special">
          PROJECTS
        </div>
        <div className="my-5 flex flex-col gap-4">
          <Card title="Frontent Developer/IBM" description="Frontend Developer on IBM tech company." year="2023" link="#" />
          <Card title="Backend Developer/Microsoft" description="Frontend Developer on Microsoft company." year="2022" link="#" />
          <Card title="Cloud Engineer/Google" description="Cloud Engineer on GOOGLE company." year="2021" link="#" />
        </div>
      </div>
    </Layout>
  )
}
