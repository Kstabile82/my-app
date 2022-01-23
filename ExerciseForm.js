import React, { useState } from "react"; 
import FilterResults from "./FilterResults";

function ExerciseForm ({ exercises, user }) {   
    const [difficulty, setDifficulty] = useState("");
    const [category, setCategory] = useState("");
    const [isSubmitted, setSubmitted] = useState("false"); 
    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted("true")
    }
    function handleChange(e) {
        e.preventDefault();
        if (e.target.name === "category") {
            setCategory(e.target.value);
        }       
        else {
            setDifficulty(e.target.value);
        }
    }
        return (
            <div>
                <h4>Filter By:</h4>
                    <div className="category">
                        <form className="exerciseForm" onSubmit={handleSubmit}>
                            <select name="category" id="category" onChange={handleChange}>
                            <option value="" hidden>Category</option>
                            <option value="Cardio">Cardio</option>
                            <option value="Upper Body">Upper Body</option>
                            <option value="Lower Body">Lower Body</option>
                            <option value="Core">Core</option>
                        </select>
                            <select name="difficulty" id="difficulty" onChange={handleChange}>
                            <option value="" hidden>Difficulty</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                        <br></br>
                        <button>Submit</button>
                        <div>
                            {isSubmitted === "true" ? <FilterResults 
                        category={category} 
                        difficulty={difficulty}
                        isSubmitted={isSubmitted} 
                        exercises={exercises}
                        user={user} /> : null}
                        </div>
                    </form>
                    </div>
                    <br></br>
           </div>
        );
}
export default ExerciseForm; 