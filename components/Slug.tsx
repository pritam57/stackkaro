"use client";
import React, { useEffect, useState } from 'react';

interface Props {
  title: string;
}

const Slug: React.FC<Props> = ({ title }) => {
  const [slug, setSlug] = useState<string | null>(title ? title : null);

  useEffect(() => {
    if (typeof title === 'string') {
      setSlug(title); 
    }
  }, [title]);

  const clrdata = { fontWeight: "bold", color: "black", margin: 20, fontSize: 25 };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "wheat", padding: 50 }}>
      <h1 style={clrdata}>Dynamic routing</h1>
      {slug ? <h1 style={clrdata}>{slug} page</h1> : <p>Loading...</p>}
    </div>
  );
};

export default Slug;
