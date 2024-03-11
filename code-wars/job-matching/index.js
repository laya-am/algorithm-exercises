function match(candidate, job) {
    if(!candidate.minSalary || !job.maxSalary){
      throw new Error("error")
    }
    else if (job.maxSalary >= candidate.minSalary*0.9){
      return true
    }return false
    // is this job a valid match for the candidate?
  }