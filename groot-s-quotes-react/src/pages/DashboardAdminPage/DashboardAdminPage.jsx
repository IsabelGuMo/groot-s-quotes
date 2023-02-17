import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { deleteQuote, getQuotes } from '../../services/Functions';

function DashboardAdminPage() {
    const [quotes, setQuotes] = useState([]);

    const getAllQuotes = async () => {
        const allQuotes = await getQuotes();
        setQuotes(allQuotes);
    }
    useEffect(() => {
        getAllQuotes();
    }, []);
    console.log(quotes);
  return (
    <div>
        <Header/>
        <div>
        <div className='d-grid gap-2'>
            <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
        </div>

        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Image</th>
                    <th>Quote</th>
                    <th>Author</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                { quotes.map( (quote) => (
                    <tr key={quote.id}>
                        <td> <img src={quote.image} alt="" /> </td>    
                        <td> {quote.quote_text} </td>    
                        <td> {quote.author_name} </td>    
                        <td>
                            <Link to={`/edit/${quote.id}`} className='btn btn-warning'>Edit</Link>
                            <button onClick={ ()=>deleteQuote(quote.id) } className='btn btn-danger'>Delete</button>
                        </td>

                    </tr>
                )) }
            </tbody>
        </table>
    </div>

    </div>
  )
}

export default DashboardAdminPage