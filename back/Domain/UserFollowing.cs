namespace Domain
{
    public class UserFollowing
    {
        /* Observador segue o alvo */
        public string ObserverId { get; set; }
        public AppUser Observer { get; set; }
        public string TargetId { get; set; }
        public AppUser Target { get; set; }
    }
}