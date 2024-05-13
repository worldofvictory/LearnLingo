import {TeachersCard } from '../../components/Teachers/TeachersCard';
import { Section } from '../../components/Teachers/TeachersCard.styled';
import { database } from '../../firebase/firebase';
import { Container } from '../../assets/global.Styles';
import { useFavorite } from '../../components/Teachers/Favorite';
import { Title } from './Favorite.styled';



const FavoritePage = () => {
  const favorite = useFavorite(database);

  return (
    <Section>
      <Container>
        <TeachersCard item={favorite} />
        {favorite.length === 0 && (
          <Title>You haven't added teachers to your favorites yet.</Title>
        )}
      </Container>
    </Section>
  );
};

export default FavoritePage;
