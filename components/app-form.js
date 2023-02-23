import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    age: '',
    tumorSize: '',
    tumorGrade: '',
    cancerType: '',
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(process.env.API_URL, formData);
      setResult(response.data.result);
    } catch (error) {
      console.log(error);
      setResult('Error');
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            {/* onSubmit={handleSubmit} */}
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700"
              >
                Age
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="age"
                  id="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="tumorSize"
                className="block text-sm font-medium text-gray-700"
              >
                Tumor Size
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="tumorSize"
                  id="tumorSize"
                  value={formData.tumorSize}
                  onChange={handleChange}
                  required
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="tumorGrade"
                className="block text-sm font-medium text-gray-700"
              >
                Tumor Grade
              </label>
              <div className="mt-1">
                <select
                  name="tumorGrade"
                  id="tumorGrade"
                  value={formData.tumorGrade}
                  onChange={handleChange}
                  required
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                >
                  <option value="">Select a grade</option>
                  <option value="1">Grade 1</option>
                  <option value="2">Grade 2</option>
                  <option value="3">Grade 3</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="menopause"
                className="block text-sm font-medium text-gray-700"
              >
                Menopause
              </label>
              <div className="mt-1">
                <select
                  name="menopause"
                  id="menopause"
                  value={formData.menopause}
                  onChange={handleChange}
                  required
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                >
                  <option value="">Select an option</option>
                  <option value="premeno">Pre-menopausal</option>
                  <option value="lt40">Less than 40 years old</option>
                  <option value="ge40">
                    Greater than or equal to 40 years old
                  </option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="tumorType"
                className="block text-sm font-medium text-gray-700"
              >
                Tumor Type
              </label>
              <div className="mt-1">
                <select
                  name="tumorType"
                  id="tumorType"
                  value={formData.tumorType}
                  onChange={handleChange}
                  required
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                >
                  <option value="">Select a type</option>
                  <option value="breast">Breast</option>
                  <option value="ovary">Ovary</option>
                  <option value="lung">Lung</option>
                  <option value="prostate">Prostate</option>
                  <option value="ovarian">Ovarian</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Upload an Image
              </label>
              <div className="mt-1">
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  //   onChange={handleImageChange}
                  required
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Predict'}
              </button>
            </div>
          </form>

          {result && (
            <div className="mt-6">
              <h2 className="text-lg font-medium text-gray-900">
                Prediction Result
              </h2>
              <div className="mt-2 bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  <li className="px-4 py-3 text-sm">
                    <span className="font-medium text-gray-900">
                      Prediction:
                    </span>
                    {result.prediction === 'malignant' ? 'Malignant' : 'Benign'}
                  </li>
                  <li className="px-4 py-3 text-sm">
                    <span className="font-medium text-gray-900">
                      Confidence:
                    </span>
                    {result.confidence.toFixed(2)}
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
