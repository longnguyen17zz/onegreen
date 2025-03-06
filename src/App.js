import { useEffect, useState } from "react";
import findMissingNumber from "./Task/Task1";
import isValidPassword from "./Task/Task2";
import axios from "axios";

function App() {
  useEffect(() => {
    console.log(findMissingNumber([1, 2, 3, 5]));
    console.log("Password Validity:", isValidPassword("Hello@123"));
  }, []);
  const [amount, setAmount] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "eDog Viewer";
  }, []);

  const fetchDogImages = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://dog.ceo/api/breeds/image/random/${amount}`
      );
      setImages(response.data.message);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
    setLoading(false);
  };
  return (
    <div className="p-4 text-center">
      <div className="ml-3 mb-4 flex justify-content items-center gap-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={fetchDogImages}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          LOAD 🐶
        </button>
        <button
          onClick={() => setImages([])}
          className="bg-pink-500 text-white px-4 py-2 rounded"
        >
          CLEAR
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="border p-2 flex justify-center items-center bg-[lightgray] hover:cursor-pointer rounded shadow-lg"
          >
            {loading ? (
              <div className="w-full h-40 bg-gray-300 animate-pulse"></div>
            ) : (
              <img
                src={img}
                alt="dog"
                className="w-[300px] h-[300px] object-scale-down rounded"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
