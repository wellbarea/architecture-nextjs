import Head from "next/head";
import ArticleScreen from './article/index'

export default function Home() {
    return (
        <>
            <Head>
                <title> Home </title>
            </Head>
    
            <ArticleScreen />
        </>
    )
  }
  