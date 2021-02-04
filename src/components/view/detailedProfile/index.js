// ComponentName = DetailedProfile
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const DetailedProfile = () => {
	const { detailedProfileName } = useParams()
	let [githubinfo, setGitHubInfo] = useState()

	useEffect(() => {
		runAPI()
	}, [detailedProfileName])

	const runAPI = () => {
		axios
			.get(`https://api.github.com/users/${detailedProfileName}`)
			.then((result) => setGitHubInfo(result.data))
			.catch((error) => {
				const newUser = {
					login: 'This is not a valid GitHub-User',
					avatar_url:
						'https://as1.ftcdn.net/jpg/02/43/95/20/500_F_243952078_O0BsLa1fHPrWjKtRwXw8xhhRoOS94aZJ.jpg',
					public_repos: '',
				}
				setGitHubInfo(newUser)
				console.log(error)
			})
	}

	/**
	 * create a useeffect
	 * fetch the github info from profile
	 * create a state with the github info
	 * update the state with info from profile
	 * display the state
	 * update the Params in the AdressBar
	 * Integrate the search Field Data via Params
	 */

	return (
		<div className="content">
			<div className="display">
				{githubinfo ? (
					<div>
						{githubinfo.login} <br /> <br />
						<img src={githubinfo.avatar_url} /> <br /> <br />
						<p>
							Number of public Repositories:
							{githubinfo.public_repos}{' '}
						</p>
						<br />
					</div>
				) : null}
			</div>
		</div>
	)
}
export default DetailedProfile
