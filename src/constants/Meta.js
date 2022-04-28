import Head from "next/head";

const Meta = ({title, keywords, description, ogTitle, ogType, ogUrl, ogImage}) => {
    return ( 
       <Head>
           <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
           <meta name="keywords" content={keywords}></meta>
           <meta name="description" content={description}></meta>
           <meta property="og:title" content={ogTitle} />
           <meta property="og:type" content={ogType}" />
           <meta property="og:url" content={ogUlr} />
           <meta property="og:image" content={ogImage} />
           <meta charSet="utf-8"></meta>
           <link rel="icon" href="/favicon.ico"></link>
           <title>{title}</title>
       </Head>
     );
}
 Meta.defaultProps = {
     title: "Holder Designs",
     keywords: " Holder Designs, web designer, UI designer, UX designer, junior web designer, front-end Developer, support website, product designer, webflow, squarespace",
     description: "Holder Designs showcases valuable design and development practices to assist with modern business problems",
     ogTitle: "Holder Designs"
 }
export default Meta;
