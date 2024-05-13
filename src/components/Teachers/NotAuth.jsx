import { NotAuthSection, TitleNotAuth } from './TeachersCard.styled';

export const NotAuth = () => {
  return (
    <NotAuthSection>
      <TitleNotAuth>
        Oops, you are not registered yet. Register and you will have access to
        more functions of using the site.
      </TitleNotAuth>
    </NotAuthSection>
  );
};