import React from 'react'
import '../styles/jobs.css'
import JobTables from '../components/tables/JobTables'
import JobLeftBox from '../components/tables/JobLeftBox'

const Jobs = () => {
  return (
    <div  className='jobs'>
      <JobLeftBox/>
        <JobTables/>
    </div>
  )
}

export default Jobs