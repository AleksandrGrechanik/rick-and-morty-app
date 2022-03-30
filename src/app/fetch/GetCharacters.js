import { gql } from '@apollo/client';

export default gql`
    query ($page: Int, $status: String, $species: String, $gender: String, $type: String) {
        characters(page: $page, filter: {status: $status, species: $species, gender: $gender, type: $type }) {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                status
                species
                type
                gender
                location {
                    name
                }
                image
                episode {
                    id
                    name
                }
            }
        }
    }
`


