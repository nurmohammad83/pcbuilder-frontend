import { Divider } from "antd"
import Image from "next/image"

const BlogDetails = () => {
  return (
    <div>
          <Image
              width={900}
              height={900}
              className="w-full h-96 object-cover"
              src='https://blog.pcbuilder.net/wp-content/uploads/2022/03/ideal-cpu-temperature.png'
              alt=""
            />
            <div>
                <h1 className="text-2xl text-blue-500">Ideal CPU Temperature Range – Max Safe, Normal CPU Temperature</h1>
                <div className="flex py-3 items-center">
                    <span>Abatur</span>
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-red-500 text-lg">PC builder</span>
                        <span className="text-sm">March 23, 2000</span>
                    </div>
                </div>
                <Divider className="py-5"/>
                <p>Is your CPU getting too hot, and you are worried about the temperature? If yes, then this article is for you. Below in this article, I have shared the ideal CPU temperature range, safe CPU temperature, and all the other things you need to know.</p>

                <div className="py-4">
                <h1 className="text-2xl text-blue-500">Ideal CPU Temperature Range – Max Safe, Normal CPU Temperature</h1>
                <p>Is your CPU getting too hot, and you are worried about the temperature? If yes, then this article is for you. Below in this article, I have shared the ideal CPU temperature range, safe CPU temperature, and all the other things you need to know.</p>
                <Image
              width={900}
              height={900}
              className="w-full h-96 object-cover"
              src='https://blog.pcbuilder.net/wp-content/uploads/2022/03/ideal-cpu-temperature.png'
              alt=""
            />
                </div>

                <div className="py-4">
                <h1 className="text-2xl text-blue-500">Ideal CPU Temperature Range – Max Safe, Normal CPU Temperature</h1>
                <p>Is your CPU getting too hot, and you are worried about the temperature? If yes, then this article is for you. Below in this article, I have shared the ideal CPU temperature range, safe CPU temperature, and all the other things you need to know.</p>
                <Image
              width={900}
              height={900}
              className="w-full h-96 object-cover"
              src='https://blog.pcbuilder.net/wp-content/uploads/2022/03/ideal-cpu-temperature.png'
              alt=""
            />
                </div>
            </div>
    </div>
  )
}
export default BlogDetails