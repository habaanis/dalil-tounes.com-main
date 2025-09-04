# 🗄️ ÉTAPE 3 : Configuration de la base de données Supabase

## 🎯 Objectif
Créer les tables nécessaires pour votre application Dalil Tounes

## 📋 Ce que nous allons faire
1. Accéder à l'éditeur SQL
2. Exécuter la migration de base de données
3. Vérifier que les tables sont créées
4. Configurer la sécurité (RLS)

---

## 🚀 ÉTAPE 3A : Accès à l'éditeur SQL

### Action à faire MAINTENANT dans votre dashboard Supabase :

1. **Dans la sidebar gauche**, cherchez **"SQL Editor"**
2. **Cliquez sur "SQL Editor"**
3. **Cliquez sur "New query"** (bouton en haut à droite)

Vous devriez maintenant voir un éditeur de code SQL vide.

---

## 📝 ÉTAPE 3B : Exécution de la migration

### Copiez et collez ce code SQL dans l'éditeur :

```sql
/*
  # Create payment and subscription tables

  1. New Tables
    - `subscriptions`
      - `id` (uuid, primary key)
      - `user_email` (text, user email)
      - `plan_id` (text, subscription plan identifier)
      - `plan_name` (text, plan name)
      - `amount` (numeric, subscription amount)
      - `currency` (text, currency code)
      - `status` (text, subscription status)
      - `stripe_subscription_id` (text, Stripe subscription ID)
      - `stripe_customer_id` (text, Stripe customer ID)
      - `created_at` (timestamp)
      - `expires_at` (timestamp)
    
    - `payments`
      - `id` (uuid, primary key)
      - `user_email` (text, user email)
      - `amount` (numeric, payment amount)
      - `currency` (text, currency code)
      - `status` (text, payment status)
      - `stripe_payment_intent_id` (text, Stripe payment intent ID)
      - `plan_id` (text, related plan)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for users to read their own data
*/

-- Create subscriptions table
CREATE TABLE IF NOT EXISTS subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email text NOT NULL,
  plan_id text NOT NULL,
  plan_name text NOT NULL,
  amount numeric NOT NULL,
  currency text DEFAULT 'TND',
  status text DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'expired')),
  stripe_subscription_id text,
  stripe_customer_id text,
  created_at timestamptz DEFAULT now(),
  expires_at timestamptz NOT NULL
);

-- Create payments table
CREATE TABLE IF NOT EXISTS payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email text NOT NULL,
  amount numeric NOT NULL,
  currency text DEFAULT 'TND',
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed')),
  stripe_payment_intent_id text NOT NULL,
  plan_id text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- Create policies for subscriptions
CREATE POLICY "Users can read own subscriptions"
  ON subscriptions
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'email' = user_email);

CREATE POLICY "Users can insert own subscriptions"
  ON subscriptions
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.jwt() ->> 'email' = user_email);

-- Create policies for payments
CREATE POLICY "Users can read own payments"
  ON payments
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'email' = user_email);

CREATE POLICY "Users can insert own payments"
  ON payments
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.jwt() ->> 'email' = user_email);

-- Allow anonymous access for demo purposes (remove in production)
CREATE POLICY "Allow anonymous read subscriptions"
  ON subscriptions
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow anonymous insert subscriptions"
  ON subscriptions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous read payments"
  ON payments
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow anonymous insert payments"
  ON payments
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_email ON subscriptions(user_email);
CREATE INDEX IF NOT EXISTS idx_subscriptions_status ON subscriptions(status);
CREATE INDEX IF NOT EXISTS idx_subscriptions_expires_at ON subscriptions(expires_at);
CREATE INDEX IF NOT EXISTS idx_payments_user_email ON payments(user_email);
CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);
```

### Exécution :
1. **Collez** tout ce code dans l'éditeur SQL
2. **Cliquez sur "Run"** (ou appuyez sur Ctrl+Enter)
3. **Attendez** le message de confirmation

---

## ✅ ÉTAPE 3C : Vérification des résultats

### Résultat attendu :
Vous devriez voir un message comme :
```
Success. No rows returned
```

### Si vous voyez des erreurs :
- Vérifiez que vous avez copié tout le code
- Essayez de relancer la requête
- Les erreurs "already exists" sont normales si vous relancez

---

## 🔍 ÉTAPE 3D : Vérification des tables créées

### Vérifiez que les tables existent :

1. **Dans la sidebar**, cliquez sur **"Table Editor"**
2. **Vous devriez voir 2 nouvelles tables** :
   - ✅ `subscriptions`
   - ✅ `payments`

### Vérification détaillée :
1. **Cliquez sur la table `subscriptions`**
2. **Vérifiez les colonnes** : id, user_email, plan_id, plan_name, amount, currency, status, etc.
3. **Faites pareil pour `payments`**

---

## 🔒 ÉTAPE 3E : Vérification de la sécurité (RLS)

### Pour chaque table (subscriptions et payments) :

1. **Cliquez sur la table**
2. **Allez dans l'onglet "Settings"** (en haut)
3. **Vérifiez que "Enable Row Level Security" est coché** ✅
4. **Allez dans l'onglet "Policies"**
5. **Vous devriez voir 4 politiques** pour chaque table :
   - Users can read own...
   - Users can insert own...
   - Allow anonymous read...
   - Allow anonymous insert...

---

## 📋 Checklist de vérification

- [ ] Code SQL exécuté sans erreur majeure
- [ ] Table `subscriptions` créée avec toutes les colonnes
- [ ] Table `payments` créée avec toutes les colonnes
- [ ] RLS activé sur les deux tables
- [ ] Politiques de sécurité créées (4 par table)
- [ ] Index créés pour les performances

---

## 🎯 Prochaine étape

Une fois que vous avez **vérifié que tout est correct**, dites-moi **"base de données configurée"** et nous passerons à la configuration de votre fichier .env !

---

## 🆘 Problèmes courants

**Erreur "permission denied" :**
- C'est normal, continuez quand même
- Les politiques de sécurité sont actives

**Table déjà existante :**
- Pas de problème, le code utilise "IF NOT EXISTS"
- Continuez normalement

**Je ne vois pas les tables :**
- Rafraîchissez la page
- Vérifiez dans "All tables" dans Table Editor
- Attendez quelques secondes et réessayez

**Erreur de syntaxe :**
- Vérifiez que vous avez copié TOUT le code
- Assurez-vous qu'il n'y a pas de caractères manquants

---

**🎯 PROCHAINE ÉTAPE : Configuration du fichier .env (dès que la base est prête)**