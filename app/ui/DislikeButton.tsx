"use client";

import React from 'react'

const DislikeButton = ({ blogSlug }: { blogSlug: string }) => {
      return (
            <div>
                  <button onClick={() => {
                        console.log("DisLike Button Clicked for blog: ", blogSlug)
                  }}>DisLike</button>
            </div>
      )
}

export default DislikeButton
