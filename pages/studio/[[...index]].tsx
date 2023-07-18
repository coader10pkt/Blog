import {Studio} from 'sanity'
import config from '../../sanity.config'
import Head from 'next/head'

export default function StudioPage() {
  return <>
  <Head>
    <title>Studio</title>
  </Head>
  <div className="text-center text-cyan-100/50 font-bold bg-gray-900">Note: Fill All fields during writing posts.</div>
  <Studio config={config} />
  </>
}