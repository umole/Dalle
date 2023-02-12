import React, { useState, useEffect } from 'react'
import { Loader, Card, FormField } from '../components';

const home = () => {
    const [loading, setLoading] = useState(false);
    const [allPosts, setAllposts] = useState(null);
    
    return (
        <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">The Community Showcase</h1>
      </div>
      </section>
    )
}

export default home