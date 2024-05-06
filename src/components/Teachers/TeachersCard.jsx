import { useState } from 'react';
import { set, ref, remove } from 'firebase/database';

import {
  ButtonBookLesson,
  ButtonRM,
  ItemLevels,
  ItemTeacher,
  ListLevels,
  ListTeacher,
  Wrapper,
  WrapperImg,
} from './TeachersCard.styled';
import { Avatar } from '@mui/material';
import { useModal } from '../Modal/useModal';
import { ModalComponent } from '../Modal/Modal';
//import { BookLesson } from 'components/FormBookLesson/BookLesson';
import { useSelector } from 'react-redux';
import { database } from '../../firebase/firebase';
//import { useFavorite } from 'helpers/favorite';
//import { StyledBadge } from './StyledBadge';
import { ReviewerComponent } from './Rewiev';
import { AboutTeacher } from './AboutTeacher';
import { indexedDBLocalPersistence } from 'firebase/auth';
//import { NotAuth } from './NotAuth';

export const TeachersCard = ({ item }) => {
  const [visibility, setVisibility] = useState({});
  const [teacher, setTeacher] = useState();
  const { isOpen, openModal, closeModal } = useModal();
  //const authUser = useSelector(state => state.authUser.token);
  //const favorite = useFavorite(database);

  const onClickModal = id => {
    const detailsTeacher = item.find(teachers => teacher.id === id);
    setTeacher(detailsTeacher);
    openModal('bookLesson');

    setVisibility({ ...visibility, [id]: false });
  };

  

  

  

  return (
    <>
      <ListTeacher>
        {item.map(
          ({
            name,
            surname,
            languages,
            levels,
            rating,
            reviews,
            price_per_hour,
            lessons_done,
            avatar_url,
            lesson_info,
            conditions,
            experience,
            id,
          }) => {
            return (
              <ItemTeacher key={id}>
                <WrapperImg>
                  
                    <Avatar
                      src={avatar_url}
                      alt={experience}
                      width="96"
                      height="96"
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  
                </WrapperImg>
                <Wrapper>
                  <AboutTeacher
                    lessons_done={lessons_done}
                    rating={rating}
                    price_per_hour={price_per_hour}
                   
                    id={id}
                   
                    
                    name={name}
                    surname={surname}
                    languages={languages}
                    lesson_info={lesson_info}
                    conditions={conditions}
                  />
                  {!visibility[id] && (
                    <ButtonRM
                      type="button"
                      onClick={() =>
                        setVisibility({ ...visibility, [id]: true })
                      }
                    >
                      Read more
                    </ButtonRM>
                  )}
                  {visibility[id] && (
                    <ReviewerComponent
                      experience={experience}
                      reviews={reviews}
                    />
                  )}
                  <ListLevels>
                    {levels.map((i, index) => (
                      <ItemLevels key={index}>
                        <p>{i}</p>
                      </ItemLevels>
                    ))}
                  </ListLevels>
                  {visibility[id] && (
                    <ButtonBookLesson
                      type="button"
                      onClick={() => onClickModal(id)}
                    >
                      Book trial lesson
                    </ButtonBookLesson>
                  )}
                </Wrapper>
              </ItemTeacher>
            );
          }
        )}
      </ListTeacher>
      {isOpen.open && isOpen.name === 'bookLesson' && (
        <ModalComponent onClose={closeModal}>
          
        </ModalComponent>
      )}
      {isOpen.open && isOpen.name === 'notAuth' && (
        <ModalComponent onClose={closeModal}>
        
        </ModalComponent>
      )}
    </>
  );
};
