import { Layout } from '../../components/Layout'

export default function Index({ data }) {
  return (
    <Layout data={data} title="Contact Information">
      <h2 className="h2 mb-8">Contact Information</h2>
    </Layout>
  )
}

export const getServerSideProps = async (_context) => {
  return {
    props: {
      data: {
        id: 1,
        firstName: 'Sidra',
        lastName: 'Doe',
        middleName: 'K',
        dob: '1989-01-23',
        sin: '555 555 555',
        maritalStatus: 'Married',
        branchNumber: 786904,
        institutionNumber: 222,
        accountNumber: 1234123,
      },
    },
  }
}