import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <Fragment>
      {/* Navbar */}
      <Navbar title={"Image Gallery"} />
      {/* About Us */}
      <div className="xl:relative">
        <img src="/about.png" alt="" srcset="" width={1520} height={640} />
        <div className="xl:absolute xl:top-20 w-full">
          <h2 className="text-center text-4xl text-dark font-bold">About Us</h2>
          <p className="my-5 md:my-14 mx-3 md:mx-auto md:w-4/5 text-center text-xl text-transparent bg-clip-text bg-gradient-to-b from-dark  via-normal to-light font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error sapiente laborum, totam architecto deserunt quia veritatis? Aut repellendus voluptate ratione accusamus placeat distinctio quaerat sit, commodi soluta architecto reprehenderit veniam nulla unde? Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, cupiditate aliquam officia nostrum, odit fugiat quae eaque accusamus dolores veniam vel, eius dolorum nisi nobis rem provident veritatis nemo. Tempora accusamus nisi quas, quasi sunt atque nemo mollitia nostrum, tempore odit reiciendis commodi culpa? Laudantium ullam et debitis placeat autem aliquid temporibus ab impedit iusto eligendi! Dolor, accusamus mollitia! Modi aut nulla ut delectus eum! Fuga sint saepe cumque, facilis sunt fugit perspiciatis, iste cupiditate nostrum voluptatem impedit dolorem animi distinctio commodi. Quae aut corrupti, nostrum reprehenderit expedita voluptate aspernatur aliquam est, repudiandae excepturi quam sapiente ullam quos praesentium repellat quaerat eveniet delectus! Quod voluptates excepturi obcaecati omnis fuga, quas commodi sequi a dignissimos distinctio quaerat nulla dolor quos tenetur temporibus deleniti cupiditate aliquid possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sequi, laborum praesentium neque placeat maiores rerum deserunt officia aliquam adipisci veniam necessitatibus voluptatum doloremque totam doloribus deleniti corporis possimus consequuntur enim. Tempora nobis nemo ab cumque eius illo a possimus fugiat velit inventore aliquid maiores, nulla pariatur. Commodi, vero nam!</p>
        </div>
      </div>
      {/* Footer */}
      <Footer title={'Image Gallery'} />
    </Fragment>
  )
}

export default About