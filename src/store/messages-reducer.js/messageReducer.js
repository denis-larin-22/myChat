import { deleteMessage, sendMessage } from './actions';
import { getNewMessageObj } from './helpers';

const initState = [{
    name: 'Ava_Grady',
    message: 'ab',
    id: '1',
    isAdmin: true
},
{
    name: 'Clark_Becker49',
    message: 'Mollitia iste voluptates ipsa porro illo esse. Maxime blanditiis praesentium fugiat voluptas quos pariatur ipsum consectetur maiores. Iure corporis praesentium quisquam omnis odit facere beatae reprehenderit beatae.',
    id: '2',
    isAdmin: false
},
{
    name: 'Cole_Bauch',
    message: 'Perspiciatis voluptatem repudiandae velit totam repellendus eius. Cum aut veritatis autem quae libero possimus eum. Quae distinctio et sunt excepturi totam quo perspiciatis culpa. Esse delectus porro. Dolores quisquam quidem rerum consequuntur cum id debitis iusto ex.',
    id: '3',
    isAdmin: false
},
{
    name: 'Makenzie_Frami12',
    message: 'Impedit odit architecto id animi possimus ullam. Aut iste quos velit velit ut est odio. Sint non ut. Fugiat ad quasi recusandae quibusdam nesciunt error natus cum impedit. Facilis ipsam ducimus assumenda veritatis modi illum aspernatur maxime id.',
    id: '4',
    isAdmin: true
},
{
    name: 'Tyshawn_Botsford',
    message: 'Tempora enim suscipit. Autem beatae voluptates in vel tempora cum. Modi non adipisci. Illo provident doloribus explicabo laboriosam. Facere nobis ipsum voluptatem libero numquam at expedita voluptatum.',
    id: '5',
    isAdmin: false
},
{
    name: 'Sylvan_Kutch10',
    message: 'Commodi voluptatem maiores impedit reiciendis voluptatem molestiae dolore iste ab.',
    id: '6',
    isAdmin: false
},
{
    name: 'Ciara.Schultz33',
    message: 'Temporibus illum quaerat eum quibusdam voluptatum. Recusandae ullam doloremque atque itaque maxime quibusdam qui. Deleniti ab ratione ipsam. Officia itaque unde laudantium tenetur voluptates consequuntur. Occaecati perferendis consectetur animi facere reiciendis a. Expedita atque perferendis ipsa quidem officiis repellat aspernatur maxime illum.',
    id: '7',
    isAdmin: true
}];

export const messageReducer = (state = initState, action) => {
    switch (action.type) {
    
    case sendMessage.TYPE:
        return (
            [...state, getNewMessageObj(action.payload)]
        );
    
    case deleteMessage.TYPE:
        console.dir(action.payload);
        return (
            state.filter(item => item !== action.payload)
        );
    default :
        return state;
    }
};