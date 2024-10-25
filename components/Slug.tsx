"use client"
import React, { useEffect, useState } from 'react';

interface Props {
  title: Promise<{ slug: string }>;
}

const Slug: React.FC<Props> = (props) => {
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    props.title.then(data => setSlug(data.slug));
  }, [props.title]);


  const clrdata= {fontWeight:"bold",color:"black",margin:20,fontSize:25}
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",backgroundColor:"wheat", padding:50}}>
      <h1 style={clrdata}>Dynamic routing </h1>
      {slug ? <h1 style={clrdata}>{slug} page</h1> : <p>Loading...</p>}
    </div>
  );
};

export default Slug;
